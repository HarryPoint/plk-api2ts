// http://47.108.139.107:16700/doc.html#/default/生产事件管理/exportUsingPOST_19
// 生产处理分页查询的对象
export interface IProduceObjectsThatHandlePagingQueries {
    // 当前页面
    pageNo: number;
    // 生产订单号
    produceOrderCode: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 异常分类
    type: string;
    // 提交人id
    createUserId: number;
    // 生产异常类型id
    produceAbnormalCategoryId: number;
    // 状态
    status: string;
    // 操作开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 批次号
    lotNo: string;
    // 操作结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 处理人id
    handleUserId: number;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
