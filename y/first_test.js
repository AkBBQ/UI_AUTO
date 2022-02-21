Feature ('page')


Scenario('case1', ({ I }) => {
    I.amOnPage('/');
    I.see('百度');
    I.wait(3)
    // I.click({xpath:'/html/body/div[1]/div[1]/div[5]/div/div/form/span[2]/input'})
    I.fillField({xpath:'/html/body/div[1]/div[1]/div[5]/div/div/form/span[1]/input'},'中国')
    // I.click('{/html/body/div[1]/div[1]/div[5]/div/div/form/span[2]/input}')
    I.click({xpath:'/html/body/div[1]/div[1]/div[5]/div/div/form/span[2]/input'})
    I.wait(5)
});


Scenario('case2', ({ I }) => {
    I.amOnPage('/');
    I.see('百度');
    I.wait(3)
    // I.click({xpath:'/html/body/div[1]/div[1]/div[5]/div/div/form/span[2]/input'})
    I.fillField({xpath:'/html/body/div[1]/div[1]/div[5]/div/div/form/span[1]/input'},'lalala')
   // I.click('{/html/body/div[1]/div[1]/div[5]/div/div/form/span[2]/input}')
    I.wait(5)
});

