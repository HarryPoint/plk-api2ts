// JSONResult«导出信息«工时工费报表返回VO»»
export interface IJSONResult导出信息工时工费报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息工时工费报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«工时工费报表返回VO»
export interface I导出信息工时工费报表返回VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: I工时工费报表返回VO[];
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
