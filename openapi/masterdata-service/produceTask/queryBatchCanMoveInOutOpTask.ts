// 任务批量操作DTO_1
export interface I任务批量操作DTO_1 {
    // 工序id
    processId: number;
    // 生产任务查询列表
    produceTaskDetails: I任务批量操作DTO[];
    // 查询类型
    queryType: string;
}
// 任务批量操作DTO
export interface I任务批量操作DTO {
    // 生产任务id
    produceTaskId: number;
    // 批次订单id集
    lotIds: number[];
}
// JSONResult«批量操作任务返回信息DTO»
export interface IJSONResult批量操作任务返回信息DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I批量操作任务返回信息DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批量操作任务返回信息DTO
export interface I批量操作任务返回信息DTO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 区域id
    areaId: number;
    // 区域编码
    areaCode: string;
    // 区域名称
    areaName: string;
    // 操作任务id集
    taskIds: number[];
    // 需进料数/需出料数
    waitQuantity: number;
    // 可进料数/可出料数
    canOptQuantity: number;
    // 物料数据
    materials: I批量操作任务物料响应DTO[];
}
// 批量操作任务物料响应DTO
export interface I批量操作任务物料响应DTO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 物料规格
    materialSpec: string;
    // 进料/出料数量
    quantity: number;
    // 生产任务列表
    produceTaskList: IBatchOpTaskMoveInOutResponseDTO[];
}
// BatchOpTaskMoveInOutResponseDTO
export interface IBatchOpTaskMoveInOutResponseDTO {
    // undefined
    materialId: number;
    // 生产任务ID
    produceTaskId: number;
    // 进出站方式
    inOutType: string;
    // 生产任务编码
    produceTaskNo: string;
    // 进料/出料数量(可用数量)
    quantity: number;
    // 需生产数量
    needProduceQuantity: number;
    // 批次订单列表
    lotOrders: I批量操作任务批次订单响应DTO[];
}
// 批量操作任务批次订单响应DTO
export interface I批量操作任务批次订单响应DTO {
    // 批次id
    lotId: number;
    // 批次号
    lotNo: string;
    // 需进料数/需出料数
    waitQuantity: number;
    // 可进料数/可出料数
    canOptQuantity: number;
}