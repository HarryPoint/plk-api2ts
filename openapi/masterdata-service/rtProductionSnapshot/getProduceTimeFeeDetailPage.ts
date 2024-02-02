// 工时工费报表搜索VO
export interface I工时工费报表搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 工序id集
    processIds: number[];
    // 生产订单号
    produceOrderCode: string;
    // 员工id集
    userIds: number[];
    // 物料id集
    materialIds: number[];
    // 班组id集
    classGroupIds: number[];
    // 查询开始日期 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 查询结束日期 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 销售订单编号
    salesOrderCode: string;
    // 生产任务编码
    produceTaskNo: string;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«工时工费报表返回VO»»
export interface IJSONResult分页信息工时工费报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息工时工费报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«工时工费报表返回VO»
export interface I分页信息工时工费报表返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I工时工费报表返回VO[];
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
// 工时工费报表返回VO
export interface I工时工费报表返回VO {
    // 创建时间
    createTime: string;
    // 员工id
    userId: number;
    // 员工姓名
    username: string;
    // 班组id
    classGroupId: number;
    // 班组名称
    classGroupName: string;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 订单id
    produceOrderId: number;
    // 生产订单编号
    produceOrderCode: string;
    // 订单数量(工单数量)
    produceOrderTotalCount: number;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 合格产出数量
    produceQuantity: number;
    // 合格产出工费
    produceFee: number;
    // 返工数量
    backQuantity: number;
    // 返工产出工费
    backFee: number;
    // 销售订单id
    salesOrderId: number;
    // 销售订单编号
    salesOrderCode: string;
    // 生产任务id
    produceTaskId: number;
    // 生产任务编码
    produceTaskNo: string;
}
