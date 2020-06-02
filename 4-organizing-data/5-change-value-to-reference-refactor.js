// 重构目的：如果一个数据结构里有多个记录，同时关联到一个对象，那么这个记录就可以用引用的方式导入到该对象，这样数据更新就会很容易

let customer = customerRepository.get(customerData.id);
