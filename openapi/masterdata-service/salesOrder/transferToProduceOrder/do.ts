// 批量转到生产订单
export interface I批量转到生产订单 {
    // 是否生产订单继承销售订单编号
    isExtendSalesOrderCode: string;
    // 转生产订单数据列表
    transferToProduceOrderDataList: I销售订单转生产订单子物料生产信息DTO[];
}
// 销售订单转生产订单子物料生产信息DTO
export interface I销售订单转生产订单子物料生产信息DTO {
    // 详情id
    id: number;
    // 生产交付数量
    produceTotalCount: number;
    // 订单类型
    orderType: string;
    // 订单优先级，数值越大优先级越高
    priorityLevel: number;
    // 计划开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 计划结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 层级
    level: number;
    // 对应批次订单集合
    lotOrders: I批次编辑DTO[];
    // 子物料生产信息
    childMaterialProduces: I子生产订单配置请求[];
    // 不需要生产物料的-标准工艺节点ID列表
    notNeedProduceMaterialStandardTechnologyNodeIdList: number[];
    // 下单业务部门id
    placeOrderDepartmentId: number;
    // 下单业务部门编码
    placeOrderDepartmentCode: string;
    // 下单业务部门名称
    placeOrderDepartmentName: string;
    // 是否紧急的单子
    isEmergentOrder: string;
    // 交付日期 yyyy-MM-dd HH:mm:ss
    deliveryDate: string;
    // 标准工艺ID
    standardTechnologyId: number;
    // 产线
    productionLineId: number;
}
// 批次编辑DTO
export interface I批次编辑DTO {
    // id
    id: number;
    // 批次号
    lotNo: string;
    // 批次名称
    lotName: string;
    // 总数量
    totalCount: number;
}
// 子生产订单配置请求
export interface I子生产订单配置请求 {
    // 标准工艺路径，节点ID
    standardTechnologyNodeId: number;
    // 订单优先级，数值越大优先级越高
    priorityLevel: number;
    // 总生产数量
    totalCount: number;
    // 计划开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 计划结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 产线
    productionLineId: number;
    // 批次信息列表
    lotOrders: I批次编辑DTO[];
}
// JSONResult«销售订单转生产订单返回DTO»
export interface IJSONResult销售订单转生产订单返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I销售订单转生产订单返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 销售订单转生产订单返回DTO
export interface I销售订单转生产订单返回DTO {
    // 匹配任务id
    matchTaskId: number;
    // 生产订单ids
    produceOrderIds: number[];
}
