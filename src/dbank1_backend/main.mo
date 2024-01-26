import Debug  "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
actor DBank{
  stable var currentValue = 300;
  // currentValue := 100;
  Debug.print(debug_show(currentValue));

  public func topUp(amount:Nat){
    currentValue +=amount;
    Debug.print(debug_show(currentValue));
  };
  // topUp();
  public func withdrawl(amount:Nat){
    let tempValue:Int = currentValue - amount; 
    if(tempValue>= 0){
      currentValue-=amount;
      Debug.print(debug_show(currentValue));
    }else{
      Debug.print("Amount too large ");
    }
    
    
  };
  public query func checkBalance():async Nat{
    return currentValue;
  }
}