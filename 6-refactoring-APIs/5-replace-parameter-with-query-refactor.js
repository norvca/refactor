// 重构目的： 有些参数函数自己本身获取也很容易，我们就可以去除参数，把责任交给函数本身，这样调用方可也可以少一个参数，而得到简化

class Order {
  //...

  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    return this.discountedPrice(basePrice);
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }
}
