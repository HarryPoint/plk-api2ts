import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/检验任务检验记录相关/listByPartNumberUsingPOST
*/
export default function fetchMethod(options: { data: ICheckTaskCheckRecordQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListValidationTaskValidatesTheRecordQueryResponseDTO>(
        {
            url: "/masterdata-service/qmsInspectionTaskRecordDetail/listByPartNumber",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 检验任务检验记录查询请求DTO */
export interface ICheckTaskCheckRecordQueryRequestDTO {
    /** 业务类型 */
    businessType?: ('CUSTOMER_COMPLAIN' | 'INCOMING_INSPECTION' | 'FIRST_INSPECTION' | 'PATROL_INSPECTION' | 'PROCESS_INSPECTION' | 'PRODUCT_INSPECTION' | 'SHIPMENT_INSPECTION' | 'EXPERIMENT' | 'OTHER');
    /** 检验任务id */
    inspectionTaskId?: number;
    /** 零件号 */
    partNumber?: string;
    /** 三检制类型 */
    threeInspectionSystem?: ('SELF_INSPECTION' | 'MUTUAL_INSPECTION' | 'SPECIAL_INSPECTION');
}
/** JSONResult«List«检验任务检验记录查询响应DTO»» */
export interface IJSONResultListValidationTaskValidatesTheRecordQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICheckTaskCheckRecordQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 检验任务检验记录查询响应DTO */
export interface ICheckTaskCheckRecordQueryResponseDTO {
    /** 零件号 */
    partNumber?: string;
    /** 零件检验结果 */
    inspectionResultsOfIndividualParts?: ('QUALIFIED' | 'UN_QUALIFIED' | 'UNSUITED');
    /** 不合格情况描述 */
    descriptionOfNonconformities?: string;
    /** 检验项id */
    qmsInspectionItemsId?: number;
    /** 检验项名称 */
    inspectionItemsName?: string;
    /** 标准值 */
    inspectionStandardValue?: string;
    /** 实测值 */
    inspectionActualValue?: string;
    /** 检验结果 */
    inspectionResult?: ('QUALIFIED' | 'UN_QUALIFIED' | 'UNSUITED');
}
