// 质检任务针对员工端搜索VO
export interface I质检任务针对员工端搜索VO {
    // 当前页面
    pageNo: number;
    // 任务状态
    statusList: string[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
    // 工序id
    processId: number;
    // 开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 送检人id
    createUserId: number;
    // 结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 送检物料id
    materialId: number;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«质检任务针对员工返回VO»»
export interface IJSONResult分页信息质检任务针对员工返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息质检任务针对员工返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«质检任务针对员工返回VO»
export interface I分页信息质检任务针对员工返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I质检任务针对员工返回VO[];
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
// 质检任务针对员工返回VO
export interface I质检任务针对员工返回VO {
    // id
    id: number;
    // 任务号
    taskNo: string;
    // 所属生产任务id
    produceTaskId: number;
    // 所属生产任务号
    produceTaskNo: string;
    // 生产订单id
    produceOrderId: number;
    // 生产订单号
    produceOrderCode: string;
    // 对应物料id
    materialId: number;
    // 对应物料名称
    materialName: string;
    // 对应物料编号
    materialCode: string;
    // 对应物料版次号
    materialIssueCode: string;
    // 对应物料单位
    materialUnit: string;
    // 对应工艺路径步骤id
    routingStepId: number;
    // 对应工序id
    processId: number;
    // 对应工序名称
    processName: string;
    // 对应工序编号
    processCode: string;
    // 总质检数
    totalInspectionQuantity: number;
    // 待检数
    waitInspectionQuantity: number;
    // 已检数
    inspectionQuantity: number;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
    // 送检人id
    createUserId: number;
    // 送检人姓名
    createUsername: string;
    // 送检人工号
    createUserCode: string;
    // 送检时间
    createTime: string;
}
