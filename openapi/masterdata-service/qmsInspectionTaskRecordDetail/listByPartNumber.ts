// 检验任务检验记录查询请求DTO
export interface I检验任务检验记录查询请求DTO {
    // 业务类型
    businessType: string;
    // 检验任务id
    inspectionTaskId: number;
    // 零件号
    partNumber: string;
    // 三检制类型
    threeInspectionSystem: string;
}
// JSONResult«List«检验任务检验记录查询响应DTO»»
export interface IJSONResultList检验任务检验记录查询响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I检验任务检验记录查询响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 检验任务检验记录查询响应DTO
export interface I检验任务检验记录查询响应DTO {
    // 零件号
    partNumber: string;
    // 零件检验结果
    inspectionResultsOfIndividualParts: string;
    // 不合格情况描述
    descriptionOfNonconformities: string;
    // 检验项id
    qmsInspectionItemsId: number;
    // 检验项名称
    inspectionItemsName: string;
    // 标准值
    inspectionStandardValue: string;
    // 实测值
    inspectionActualValue: string;
    // 检验结果
    inspectionResult: string;
}
