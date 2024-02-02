// JSONResult«List«销售模块返回VO»»
export interface IJSONResultList销售模块返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I销售模块返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 销售模块返回VO
export interface I销售模块返回VO {
    // 模块类型
    modelType: string;
    // 模块名称
    modelName: string;
    // 任务集
    taskList: I质检模块任务返回VO[];
    // 存在的任务数
    taskTotalCount: number;
}
// 质检模块任务返回VO
export interface I质检模块任务返回VO {
    // 任务id
    id: number;
    // 任务名称
    taskName: string;
    // 任务编号
    taskNo: string;
    // 计划质检时间/送检时间
    beginTime: string;
    // 对应工序id
    processId: number;
    // 对应工序名称
    processName: string;
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
    // 对应物料规格
    materialSpec: string;
    // 总质检数
    totalInspectionQuantity: number;
    // 待检数
    waitInspectionQuantity: number;
    // 已检数
    inspectionQuantity: number;
    // 状态
    status: string;
    // 状态名称
    statusName: string;
    // 生产订单id
    produceOrderId: number;
    // 生产订单号
    produceOrderCode: string;
    // 送检人id
    createUserId: number;
    // 送检人姓名
    createUsername: string;
    // 送检人工号
    createUserCode: string;
    // 位置
    position: string;
}
