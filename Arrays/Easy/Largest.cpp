#include<iostream>
using namespace std;

int main(){
    int arr[7] = {200, 2, 10, 1, 45, 5, 100};
    int max = 0;
    for(int i=0; i<7; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    cout<<max;
}