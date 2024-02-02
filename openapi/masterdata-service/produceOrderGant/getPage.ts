// 生产订单甘特图搜索VO
export interface I生产订单甘特图搜索VO {
    // 当前页面
    pageNo: number;
    // 生产订单号
    produceOrderCode: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 计划开始时间, yyyy-MM-dd HH:mm:ss
    workingBeginTime: string;
    // 计划结束时间, yyyy-MM-dd HH:mm:ss
    workingEndTime: string;
    // 对应物料id
    materialIds: number[];
    // 创建时间 - 开始, yyyy-MM-dd HH:mm:ss
    createBeginTime: string;
    // 创建时间 - 结束, yyyy-MM-dd HH:mm:ss
    createEndTime: string;
    // 订单状态
    orderStatus: string;
    // 生产部门id
    placeOrderCombinationId: number;
    // 分组方式
    groupType: string;
    // 订单排产状态
    planStatus: string;
}
// JSONResult«生产订单甘特返回VO»
export interface IJSONResult生产订单甘特返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产订单甘特返回VO_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
