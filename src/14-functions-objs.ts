(()=>{
  const login = (data: {email:string, password: number})=> {
    console.log(data.email, data.password);
  }

  login({
    email: 'ana@ana.com',
    password: 12121
  });
  type Sizes = 'S'| 'M'| 'L'| 'XL';
  const products: any[] = [];
  const addProduct = (data:{
    title:string,
    createdAt:Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createdAt: new Date(2003,13,1),
    stock:12
  });
  addProduct({
    title: 'Pro2',
    createdAt: new Date(2222,22,2),
    stock:12,
    size:'M'
  });
  console.log(products);


})();
