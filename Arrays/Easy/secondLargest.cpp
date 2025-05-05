#include<iostream>
using namespace std;

int main(){
    int arr[8] = {10,200, 90, 4, 22, 1, 9};
    int max = 0;
    int secondMax = 0;
    for (int i = 0; i < 8; i++)
    {
        if(arr[i] > max){
            max = arr[i];
        }
    }

    for (int i = 0; i < 6; i++)
    {
        if(arr[i] != max && arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    cout<<secondMax;
     
}