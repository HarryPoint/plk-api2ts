// JSONResult«产品订单详情响应对象»
export interface IJSONResultProductOrderDetailsResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductOrderDetailsResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 产品订单详情响应对象
export interface IProductOrderDetailsResponseObject {
    // 订单id
    id: number;
    // 订单编号
    code: string;
    // 企业编号
    enterpriseCode: string;
    // 企业id
    enterpriseId: number;
    // 产品模块数组
    productModuleArray: string[];
    // 类型
    type: string;
    // 购买账号数
    buyAccountQuantity: number;
    // 状态
    status: string;
    // 产品类型
    productType: string;
    // 订单金额(元)
    orderMoneyQuantity: number;
    // 预计交付日期
    planDeliveryTime: string;
    // 下单用户id
    placeOrderUserId: number;
    // 预计到期日期
    planExpireTime: string;
    // 下单用户名称
    placeOrderUserName: string;
    // 下单时间
    placeOrderTime: string;
    // 企业名称
    enterpriseName: string;
    // 付款记录列表
    payRecordList: IProductOrderPaymentHistoryDetailsResponseObject[];
    // 购买时长(天)
    buyDurationQuantity: number;
    // 合同签约时间
    contractTime: string;
    // 加购类型
    appendType: string;
    // 延期类型
    delayType: string;
    // 延长时长(天)
    delayDurationQuantity: number;
    // 延期原因
    delayReason: string;
    // 服务信息
    productOrderServiceSnapshot: IProductOrderServiceInformationResponseObject;
}
// 产品订单付款记录详情响应对象
export interface IProductOrderPaymentHistoryDetailsResponseObject {
    // 付款记录id
    id: number;
    // 计划付款日期
    planPayTime: string;
    // 应付金额(元)
    payableQuantity: number;
    // 实际付款日期
    realPayTime: string;
    // 实付金额(元)
    actualPayQuantity: number;
    // 状态
    status: string;
}
// 产品订单服务信息响应对象
export interface IProductOrderServiceInformationResponseObject {
    // 产品类型
    productType: string;
    // 到期时间
    expireTime: string;
    // 账号数
    availableAccountQuantity: number;
    // 产品模块数组
    productModuleArray: string[];
}
