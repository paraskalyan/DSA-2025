#include<iostream>
using namespace std;

int main(){
    int arr[6] = {1,2,3,4,5, 2};
    int flag = 0;
    for (int i = 1; i < 6; i++)
    {
        if(arr[i] < arr[i-1]){
            flag = 1;
        }
    }

    if (flag == 0)
    {
        cout<<"Sorted";
    }
    else
        cout<<"Not sorted";
    
    
}