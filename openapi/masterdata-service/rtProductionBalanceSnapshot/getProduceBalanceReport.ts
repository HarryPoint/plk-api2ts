// 生产结存统计报表搜索VO
export interface I生产结存统计报表搜索VO {
    // 工序id集
    processIds: number[];
    // 物料id
    materialId: number;
    // 开始日期 yyyy-MM-dd HH:mm:ss
    beginDate: string;
    // 结束日期 yyyy-MM-dd HH:mm:ss
    endDate: string;
}
// JSONResult«生产结存物料统计报表返回VO»
export interface IJSONResult生产结存物料统计报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产结存物料统计报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产结存物料统计报表返回VO
export interface I生产结存物料统计报表返回VO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 物料规格
    materialSpec: string;
    // 报表返回数据集
    reportResults: I生产结存统计报表返回VO[];
}
// 生产结存统计报表返回VO
export interface I生产结存统计报表返回VO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 前日结存成品数
    preDayFinishBalanceQuantity: number;
    // 前日结存半成品数
    preDaySemiBalanceQuantity: number;
    // 前日结存返工品数
    preDayBackBalanceQuantity: number;
    // 接收数合计
    totalReceiveQuantity: number;
    // 产出数合计
    totalProduceQuantity: number;
    // 转出数 - 合格转出合计
    totalRollOutProduceQuantity: number;
    // 转出数 - 返工转出合计
    totalRollOutBackQuantity: number;
    // 转出数 - 委外转出合计
    totalRollOutProduceEntrustQuantity: number;
    // 当天结存成品数
    finishBalanceQuantity: number;
    // 当天结存半成品数
    semiBalanceQuantity: number;
    // 当天结存返工品数
    backBalanceQuantity: number;
    // 当天结存不良品数
    scrapBalanceQuantity: number;
    // 当天结存良品率
    yieldRate: number;
    // 日期信息集
    dateList: I生产结存统计日期报表返回VO[];
}
// 生产结存统计日期报表返回VO
export interface I生产结存统计日期报表返回VO {
    // 日期
    produceDate: string;
    // 前日结存成品数
    preDayFinishBalanceQuantity: number;
    // 前日结存半成品数
    preDaySemiBalanceQuantity: number;
    // 前日结存返工品数
    preDayBackBalanceQuantity: number;
    // 接收数
    receiveQuantity: number;
    // 产出数
    produceQuantity: number;
    // 转出数
    rollOutQuantity: number;
    // 转出数 - 合格转出
    rollOutProduceQuantity: number;
    // 转出数 - 返工转出
    rollOutBackQuantity: number;
    // 转出数 - 委外转出
    rollOutProduceEntrustQuantity: number;
    // 当天结存成品数
    finishBalanceQuantity: number;
    // 当天结存半成品数
    semiBalanceQuantity: number;
    // 当天结存返工品数
    backBalanceQuantity: number;
    // 当天结存不良品数
    scrapBalanceQuantity: number;
    // 当天结存良品率
    yieldRate: number;
}
