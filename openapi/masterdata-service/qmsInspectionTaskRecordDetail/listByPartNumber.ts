import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/检验任务检验记录相关/listByPartNumberUsingPOST
export default function fetchMethod(data: ICheckTaskCheckRecordQueryRequestDTO) {
    return http<IJSONResultListValidationTaskValidatesTheRecordQueryResponseDTO>({
        url: "/masterdata-service/qmsInspectionTaskRecordDetail/listByPartNumber",
        method: "post",
        data,
    });
}
// 检验任务检验记录查询请求DTO
export interface ICheckTaskCheckRecordQueryRequestDTO {
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
export interface IJSONResultListValidationTaskValidatesTheRecordQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICheckTaskCheckRecordQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 检验任务检验记录查询响应DTO
export interface ICheckTaskCheckRecordQueryResponseDTO {
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
