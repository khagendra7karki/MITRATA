#include <iostream>
#include<fstream>

struct node{
    int value;
    char* name;
    node* next;
};
class list{
    node* start;
public:
    list():start(nullptr){}
    void insertPhoto(){     //only inserting photos at beginning for now
        node* ptr= new node;
        ptr->next=start;
        start=ptr;
    }
    void deletePhoto(node* item){ //deleting photo for considered node
        node* ptr=start;
        while(ptr->value != item->value){
            ptr=ptr->next;
        }
        delete ptr;
    }
    void retrievePhoto(){ //Basic text file handling
        std::ofstream file;
        file.open("Photos/Description.txt");
        if(!file)
            std::cout<<"Error opening file!\n";
        file<<"Khagendra Karki,18"<<std::endl;
        file<<"Divya is not hero";
        std::ifstream infile("Description.txt");
        char ch;
        while(infile){
            infile.get(ch);
            std::cout<<ch;
        }
    }
};



//for message
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

    list l1;
    l1.retrievePhoto();

   /*
    stack s1(10);
    s1.push(5);
    s1.push(9);
    s1.push(3);
    s1.display();
    s1.pop();
    s1.display();
    */ 
    return 0;
}