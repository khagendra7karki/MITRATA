#include <iostream>

class list{

};

class stack{
    int top,max;
    int *array;
public:
    stack(){}
    stack(int size){
        top=-1;
        max=size;
        array=new int [max];
    }
    bool isFull(){
        return top>=max-1;
    }
    bool isEmpty(){
        return top==-1;
    }

    void push(int data){
        if(isFull()){
            std::cout<<"Stack is Full!";
            exit(0);
        }
        array[++top]=data;
    }
    int pop(){
        if(isEmpty()){
            std::cout<<"Stack is Empty!";
            return -1;
        }
        return array[top--];
    }
    void display(){
        int i=0;
        if(!isEmpty()){
            std::cout<<"\nStack contents are:"<<std::endl;
            while(i<=top){
                std::cout<<array[i++]<<"\t";
            }
        }
        else
            exit (0);
    }
};
int main(){
    stack s1(10);
    s1.push(5);
    s1.push(9);
    s1.push(3);
    s1.display();
    s1.pop();
    s1.display();
    return 0;
}