#include <iostream>
#include<iomanip>
#include <cmath>
using namespace std;

int main(){
    int i,j,k,n;
    float a[10][10],b[10][10],ratio;
    cout<<"Enter the order of matrix: ";
    cin>>n;
    cout<<"Enter the elements of matrix"<<endl;
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            cout<<"a["<<i+1<<"]["<<j+1<<"]= ";cin>>a[i][j];
            if(i==j)b[i][j]=1;
            else b[i][j]=0;
        }
    } 
    for(j=0;j<n;j++){
        for(i=0;i<n;i++){
            if(i!=j){
                ratio=a[i][j]/a[j][j];
                for(k=0;k<n;k++){
                    a[i][k]-=ratio*a[j][k];
                    b[i][k]-=ratio*b[j][k];
                }
            }
        }
    }
    cout<<endl;
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            cout<<setprecision(5)<<a[i][j]<<"\t";
        }
        cout<<":  ";
        for(j=0;j<n;j++){
            cout<<setprecision(5)<<(b[i][j])<<"\t";
        }
        cout<<endl;
    }
}