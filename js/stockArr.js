/*
  从2014年7月开始恢复股票池的发布。
  2015年4月暂停，10月份继续发布。
*/

var historyArr = new Array (
/*  达成日期     股票代码  股票名称  初始价格  目标价格  达成价  累计涨幅%  行业分类   关注日期     总计天数  */
  ["2015-10-17", "300465", "高伟达", "62.27", "68.00", "70.97", "13.97", "计算机行业", "2015-10-12", "5"]
);

var indexArr = new Array("0000001","1399001","1399006","1399300");

var hqArr = new Array(
/* 股票代码   所属行业     关注日期   前日收盘价   目标价    评级 */
  ["1002271", "非金属类建材", "2015-10-27", "18.55",  "25.00",  "买入"],
  ["1002029", "纺织和服装", "2015-10-27", "12.38",  "15.00",  "买入"],
  ["1000619", "建筑和工程", "2015-10-26", "12.80",  "14.80",  "增持"],
  ["1002372", "基础化工", "2015-10-26", "17.39",  "21.00",  "买入"],
  ["1002042", "纺织和服装", "2015-10-26", "9.81",  "15.00",  "买入"],
  ["1000885", "非金属类建材", "2015-10-26", "20.05",  "23.00",  "买入"],
  ["1002631", "家用轻工", "2015-10-26", "20.90",  "26.00",  "买入"],
  ["1002521", "造纸印刷轻工", "2015-10-25", "10.69",  "13.80",  "买入"],
  ["1300005", "纺织和服装", "2015-10-25", "20.23",  "30.00",  "买入"],
  ["1300078", "电子行业", "2015-10-23", "35.09",  "37.97",  "买入"],
  ["1300465", "计算机行业", "2015-10-23", "67.06",  "68.00",  "增持"],
  ["1002448", "汽车和汽车零部件", "2015-10-22", "10.09",  "18.00",  "买入"],
  ["0600801", "非金属类建材", "2015-10-21", "8.30",  "12.00",  "买入"],
  ["0600398", "纺织和服装", "2015-10-20", "14.95",  "20.00",  "买入"],
  ["1000877", "非金属类建材", "2015-10-15", "8.33",  "11.00",  "买入"],
  ["1002327", "纺织和服装", "2015-10-14", "10.94",  "12.00",  "买入"],
  ["0600418", "汽车和汽车零部件", "2015-10-12", "14.20",  "21.00",  "买入"],
  ["0603766", "非汽车交运", "2015-10-11", "17.14",  "21.00",  "买入"],
  ["1000672", "建筑材料", "2015-10-07", "7.91",  "12.10",  "增持"]
);

