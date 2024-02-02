// 生产订单搜索VO
export interface I生产订单搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 订单类型
    orderType: string;
    // 排序字段集
    orders: 分页排序VO[];
    // 生产订单号
    produceOrderCode: string;
    // 计划开始时间, yyyy-MM-dd HH:mm:ss
    workingBeginTime: string;
    // 销售订单号
    salesOrderCode: string;
    // 订单状态
    orderStatus: string;
    // 对应物料id
    materialId: number;
    // 订单排产状态
    planStatus: string;
    // 创建时间 - 开始, yyyy-MM-dd HH:mm:ss
    createBeginTime: string;
    // 计划结束时间, yyyy-MM-dd HH:mm:ss
    workingEndTime: string;
    // 生产部门id
    placeOrderDepartmentId: number;
    // 创建时间 - 结束, yyyy-MM-dd HH:mm:ss
    createEndTime: string;
}
// JSONResult«分页信息«生产订单返回VO»»
export interface IJSONResult分页信息生产订单返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«生产订单返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
