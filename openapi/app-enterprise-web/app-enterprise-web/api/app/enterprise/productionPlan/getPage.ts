// 任务下发搜索VO
export interface ITaskDeliverySearchesVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 状态
    status: string;
    // 排产计划类型
    type: string;
    // 生产订单号
    produceOrderCode: string;
    // 创建开始时间 yyyy-MM-dd HH:mm:ss
    createBeginTime: string;
    // 销售订单号
    salesOrderCode: string;
    // 对应物料id
    materialId: number;
    // 计划开始时间 yyyy-MM-dd HH:mm:ss
    planBeginTime: string;
    // 计划结束时间 yyyy-MM-dd HH:mm:ss
    planEndTime: string;
    // 创建结束时间 yyyy-MM-dd HH:mm:ss
    createEndTime: string;
    // 任务下发开始时间 yyyy-MM-dd HH:mm:ss
    issueBeginTime: string;
    // 任务下发结束时间 yyyy-MM-dd HH:mm:ss
    issueEndTime: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«任务下发返回VO»»
export interface IJSONResultThePageInformationTaskIsDeliveredBackToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePageInformationTaskIsDeliveredBackToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«任务下发返回VO»
export interface IThePageInformationTaskIsDeliveredBackToVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ITheTaskIsDeliveredBackToVO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 任务下发返回VO
export interface ITheTaskIsDeliveredBackToVO {
    // 数据状态 0停用，1启用，-1已删除
    dataStatus: number;
    // 创建员工id
    createUserId: number;
    // 创建员工名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 销售订单id
    salesOrderId: number;
    // 更新员工id
    updateUserId: number;
    // 更新员工名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 排产计划类型
    type: string;
    // 排产计划类型描述
    typeDesc: string;
    // 生产订单id
    produceOrderId: number;
    // 生产订单号
    produceOrderCode: string;
    // 销售订单号
    salesOrderCode: string;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 生产订单总数量
    produceOrderTotalCount: number;
    // 计划生产数量
    planCount: number;
    // 计划开始时间
    planBeginTime: string;
    // 计划结束时间
    planEndTime: string;
    // 下发人id
    issueUserId: number;
    // 下发人姓名
    issueUsername: string;
    // 下发时间
    issueTime: string;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
    // 是否能撤回
    canRevoke: string;
}
