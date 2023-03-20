

# The possible Node colors
BLACK = 'BLACK'
RED = 'RED'
NIL = 'NIL'

class Node:
    def __init__(self, key, color, parent, left=None, right=None, value=None, offset=None, segment=None):
        self.key = key
        self.value = value
        self.offset = offset
        self.segment = segment
        self.color = color
        self.parent = parent
        self.left = left
        self.right = right

    def __repr__(self):
        return '{color} {key} {val} {offset} {segment} Node'.format(
            color=self.color,
            key=self.key,
            val=self.value,
            offset=self.offset,
            segment=self.segment
            )

    def __iter__(self):
        if self.left.color != NIL:
            yield from self.left.__iter__()

        yield self.key

        if self.right.color != NIL:
            yield from self.right.__iter__()

    def __eq__(self, other):
        if self.color == NIL and self.color == other.color:
            return True

        if self.parent is None or other.parent is None:
            parents_are_same = self.parent is None and other.parent is None
        else:
            parents_are_same = self.parent.key == other.parent.key and self.parent.color == other.parent.color
        return self.key == other.key and self.color == other.color and parents_are_same

    def has_children(self) -> bool:
        return bool(self.get_children_count())

    def get_children_count(self) -> int:
        if self.color == NIL:
            return 0
        return sum([int(self.left.color != NIL), int(self.right.color != NIL)])
    
    def in_order(self, arr):
        if self.left.color != NIL:
            self.left.in_order(arr)
        arr.append(self)
        if self.right.color != NIL:
            self.right.in_order(arr)
        
class RedBlackTree:
    # every node has null nodes as children initially, create one such object for easy management
    NIL_LEAF = Node(key=None, color=NIL, parent=None, value=None)

    def __init__(self):
        self.count = 0
        self.root = None
        self.ROTATIONS = {
            # Used for deletion and uses the sibling's relationship with his parent as a guide to the rotation
            'L': self._right_rotation,
            'R': self._left_rotation
        }
        # Represents the total amount of bytes taken up by the key-value store
        # takign into account padding characters , and \n
        self.total_bytes = 0

    def __iter__(self):
        if not self.root:
            return list()
        yield from self.root.__iter__()

    def add(self, key, value=None, offset=None, segment=None):
        # add the node
        if not self.root:
            self.root = Node(
                key,
                color=BLACK,
                parent=None,
                left=self.NIL_LEAF,
                right=self.NIL_LEAF,
                value=value,
                offset=offset,
                segment=segment
                )
            self.count += 1
            return
        parent, node_dir = self._find_parent(key)
        if node_dir is None:
            parent.value = value
            return  # key is in the tree

        new_node = Node(
            key=key, 
            color=RED, 
            parent=parent, 
            left=self.NIL_LEAF, 
            right=self.NIL_LEAF, 
            value=value, 
            offset=offset, 
            segment=segment)

        if node_dir == 'L':
            parent.left = new_node
        else:
            parent.right = new_node

        self._try_rebalance(new_node)
        self.count += 1

    def remove(self, key):
        node_to_remove = self.find_node(key)
        if node_to_remove is None:  # node is not in the tree
            return
        if node_to_remove.get_children_count() == 2:
            # find the in-order successor and replace its key.
            # then, remove the successor
            successor = self._find_in_order_successor(node_to_remove)
            node_to_remove.key = successor.key  # switch the key
            node_to_remove = successor

        # has 0 or 1 children!
        self._remove(node_to_remove)
        self.count -= 1

    def contains(self, key) -> bool:
        return bool(self.find_node(key))

    def ceil(self, key) -> int or None:
        if self.root is None: return None
        last_found_val = None if self.root.key < key else self.root.key

        def find_ceil(node):
            nonlocal last_found_val
            if node == self.NIL_LEAF:
                return None
            if node.key == key:
                last_found_val = node.key
                return node.key
            elif node.key < key:
                # go right
                return find_ceil(node.right)
            else:
                # this node is bigger, save its key and go left
                last_found_val = node.key

                return find_ceil(node.left)
        find_ceil(self.root)
        return last_found_val

    def floor(self, key) -> int or None:
        if self.root is None: return None
        last_found_val = None if self.root.key > key else self.root.key

        def find_floor(node):
            nonlocal last_found_val
            if node == self.NIL_LEAF:
                return None
            if node.key == key:
                last_found_val = node.key
                return node.key
            elif node.key < key:
                # this node is smaller, save its key and go right, trying to find a closer one
                last_found_val = node.key

                return find_floor(node.right)
            else:
                return find_floor(node.left)

        find_floor(self.root)
        return last_found_val

    def _remove(self, node):
        left_child = node.left
        right_child = node.right
        not_nil_child = left_child if left_child != self.NIL_LEAF else right_child
        if node == self.root:
            if not_nil_child != self.NIL_LEAF:
                # if we're removing the root and it has one valid child, simply make that child the root
                self.root = not_nil_child
                self.root.parent = None
                self.root.color = BLACK
            else:
                self.root = None
        elif node.color == RED:
            if not node.has_children():
                # Red node with no children, the simplest remove
                self._remove_leaf(node)
            else:
                raise Exception('Unexpected behavior')
        else:  # node is black!
            if right_child.has_children() or left_child.has_children():  # sanity check
                raise Exception('The red child of a black node with 0 or 1 children'
                                ' cannot have children, otherwise the black height of the tree becomes invalid! ')
            if not_nil_child.color == RED:
                node.key = not_nil_child.key
                node.left = not_nil_child.left
                node.right = not_nil_child.right
            else:  # BLACK child
                # 6 cases :o
                self._remove_black_node(node)

    def _remove_leaf(self, leaf):
        if leaf.key >= leaf.parent.key:
            # in those weird cases where they're equal due to the successor swap
            leaf.parent.right = self.NIL_LEAF
        else:
            leaf.parent.left = self.NIL_LEAF

    def _remove_black_node(self, node):
        self.__case_1(node)
        self._remove_leaf(node)

    def __case_1(self, node):
        if self.root == node:
            node.color = BLACK
            return
        self.__case_2(node)

    def __case_2(self, node):
        parent = node.parent
        sibling, direction = self._get_sibling(node)
        if sibling.color == RED and parent.color == BLACK and sibling.left.color != RED and sibling.right.color != RED:
            self.ROTATIONS[direction](node=None, parent=sibling, grandfather=parent)
            parent.color = RED
            sibling.color = BLACK
            return self.__case_1(node)
        self.__case_3(node)

    def __case_3(self, node):
        parent = node.parent
        sibling, _ = self._get_sibling(node)
        if (sibling.color == BLACK and parent.color == BLACK
           and sibling.left.color != RED and sibling.right.color != RED):
            # color the sibling red and forward the double black node upwards
            # (call the cases again for the parent)
            sibling.color = RED
            return self.__case_1(parent)  # start again

        self.__case_4(node)

    def __case_4(self, node):
        parent = node.parent
        if parent.color == RED:
            sibling, direction = self._get_sibling(node)
            if sibling.color == BLACK and sibling.left.color != RED and sibling.right.color != RED:
                parent.color, sibling.color = sibling.color, parent.color  # switch colors
                return  # Terminating
        self.__case_5(node)

    def __case_5(self, node):
        sibling, direction = self._get_sibling(node)
        closer_node = sibling.right if direction == 'L' else sibling.left
        outer_node = sibling.left if direction == 'L' else sibling.right
        if closer_node.color == RED and outer_node.color != RED and sibling.color == BLACK:
            if direction == 'L':
                self._left_rotation(node=None, parent=closer_node, grandfather=sibling)
            else:
                self._right_rotation(node=None, parent=closer_node, grandfather=sibling)
            closer_node.color = BLACK
            sibling.color = RED

        self.__case_6(node)

    def __case_6(self, node):
        sibling, direction = self._get_sibling(node)
        outer_node = sibling.left if direction == 'L' else sibling.right

        def __case_6_rotation(direction):
            parent_color = sibling.parent.color
            self.ROTATIONS[direction](node=None, parent=sibling, grandfather=sibling.parent)
            # new parent is sibling
            sibling.color = parent_color
            sibling.right.color = BLACK
            sibling.left.color = BLACK

        if sibling.color == BLACK and outer_node.color == RED:
            return __case_6_rotation(direction)  # terminating

        raise Exception('We should have ended here, something is wrong')

    def _try_rebalance(self, node):
        parent = node.parent
        key = node.key
        if (parent is None  # what the fuck? (should not happen)
           or parent.parent is None  # parent is the root
           or (node.color != RED or parent.color != RED)):  # no need to rebalance
            return
        grandfather = parent.parent
        node_dir = 'L' if parent.key > key else 'R'
        parent_dir = 'L' if grandfather.key > parent.key else 'R'
        uncle = grandfather.right if parent_dir == 'L' else grandfather.left
        general_direction = node_dir + parent_dir

        if uncle == self.NIL_LEAF or uncle.color == BLACK:
            # rotate
            if general_direction == 'LL':
                self._right_rotation(node, parent, grandfather, to_recolor=True)
            elif general_direction == 'RR':
                self._left_rotation(node, parent, grandfather, to_recolor=True)
            elif general_direction == 'LR':
                self._right_rotation(node=None, parent=node, grandfather=parent)
                # due to the prev rotation, our node is now the parent
                self._left_rotation(node=parent, parent=node, grandfather=grandfather, to_recolor=True)
            elif general_direction == 'RL':
                self._left_rotation(node=None, parent=node, grandfather=parent)
                # due to the prev rotation, our node is now the parent
                self._right_rotation(node=parent, parent=node, grandfather=grandfather, to_recolor=True)
            else:
                raise Exception("{} is not a valid direction!".format(general_direction))
        else:  # uncle is RED
            self._recolor(grandfather)

    def __update_parent(self, node, parent_old_child, new_parent):
        node.parent = new_parent
        if new_parent:
            # Determine the old child's position in order to put node there
            if new_parent.key > parent_old_child.key:
                new_parent.left = node
            else:
                new_parent.right = node
        else:
            self.root = node

    def _right_rotation(self, node, parent, grandfather, to_recolor=False):
        grand_grandfather = grandfather.parent
        self.__update_parent(node=parent, parent_old_child=grandfather, new_parent=grand_grandfather)

        old_right = parent.right
        parent.right = grandfather
        grandfather.parent = parent

        grandfather.left = old_right  # save the old right keys
        old_right.parent = grandfather

        if to_recolor:
            parent.color = BLACK
            node.color = RED
            grandfather.color = RED

    def _left_rotation(self, node, parent, grandfather, to_recolor=False):
        grand_grandfather = grandfather.parent
        self.__update_parent(node=parent, parent_old_child=grandfather, new_parent=grand_grandfather)

        old_left = parent.left
        parent.left = grandfather
        grandfather.parent = parent

        grandfather.right = old_left  # save the old left keys
        old_left.parent = grandfather

        if to_recolor:
            parent.color = BLACK
            node.color = RED
            grandfather.color = RED

    def _recolor(self, grandfather):
        grandfather.right.color = BLACK
        grandfather.left.color = BLACK
        if grandfather != self.root:
            grandfather.color = RED
        self._try_rebalance(grandfather)

    def _find_parent(self, key):
        def inner_find(parent):
            if key == parent.key:
                return parent, None
            elif parent.key < key:
                if parent.right.color == NIL:  # no more to go
                    return parent, 'R'
                return inner_find(parent.right)
            elif key < parent.key:
                if parent.left.color == NIL:  # no more to go
                    return parent, 'L'
                return inner_find(parent.left)

        return inner_find(self.root)

    def find_node(self, key):
        def inner_find(root):
            if root is None or root == self.NIL_LEAF:
                return None
            if key > root.key:
                return inner_find(root.right)
            elif key < root.key:
                return inner_find(root.left)
            else:
                return root

        found_node = inner_find(self.root)
        return found_node

    def _find_in_order_successor(self, node):
        right_node = node.right
        left_node = right_node.left
        if left_node == self.NIL_LEAF:
            return right_node
        while left_node.left != self.NIL_LEAF:
            left_node = left_node.left
        return left_node

    def _get_sibling(self, node):
        parent = node.parent
        if node.key >= parent.key:
            sibling = parent.left
            direction = 'L'
        else:
            sibling = parent.right
            direction = 'R'
        return sibling, direction
    
    def in_order(self):

        arr = []
        if self.root:
            self.root.in_order(arr)

        return arr