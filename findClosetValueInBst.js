function findClosestValueInBst(tree, target) {
    // Write your code here.
      console.log('Current value: ', tree.value)
    //   console.log('Current left: ', tree.left.value)
    //   console.log('Current right: ', tree.right.value)
  
      if(tree.value === target){
          console.log('Exact target')
          return tree.value
      }
      if(tree.value < target){
          if(tree.right){
              console.log('go right')
              return findClosestValueInBst(tree.right, target)
          }else{
              return tree.value
          }
      }
      else if(tree.value > target){
          if(tree.left){
              console.log('go left')
              return findClosestValueInBst(tree.left, target)
          }else{
              return tree.value
          }
      }
  }
  
  // Do not edit the line below.

  module.exports = findClosestValueInBst;

    
  

  