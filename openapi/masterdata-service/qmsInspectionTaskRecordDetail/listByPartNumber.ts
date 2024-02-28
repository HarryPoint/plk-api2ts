import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/检验任务检验记录相关/listByPartNumberUsingPOST
*/
export default function fetchMethod(options: { data: ICheckTaskCheckRecordQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListValidationTaskValidatesTheRecordQueryResponseDTO>(
        {
            url: "/masterdata-service/qmsInspectionTaskRecordDetail/listByPartNumber",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 检验任务检验记录查询请求DTO */
export interface ICheckTaskCheckRecordQueryRequestDTO {
    /** 业务类型 */
    businessType?: ECheckTaskCheckRecordQueryRequestDTO_businessType;
    /** 检验任务id */
    inspectionTaskId?: string;
    /** 零件号 */
    partNumber?: string;
    /** 三检制类型 */
    threeInspectionSystem?: ECheckTaskCheckRecordQueryRequestDTO_threeInspectionSystem;
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
    ts?: string;
}
/** 检验任务检验记录查询响应DTO */
export interface ICheckTaskCheckRecordQueryResponseDTO {
    /** 零件号 */
    partNumber?: string;
    /** 零件检验结果 */
    inspectionResultsOfIndividualParts?: ECheckTaskCheckRecordQueryResponseDTO_inspectionResultsOfIndividualParts;
    /** 不合格情况描述 */
    descriptionOfNonconformities?: string;
    /** 检验项id */
    qmsInspectionItemsId?: string;
    /** 检验项名称 */
    inspectionItemsName?: string;
    /** 标准值 */
    inspectionStandardValue?: string;
    /** 实测值 */
    inspectionActualValue?: string;
    /** 检验结果 */
    inspectionResult?: ECheckTaskCheckRecordQueryResponseDTO_inspectionResult;
}

export enum ECheckTaskCheckRecordQueryRequestDTO_businessType {
    /** 客户投诉 */
    CUSTOMER_COMPLAIN = "CUSTOMER_COMPLAIN",
    /** 来料检 */
    INCOMING_INSPECTION = "INCOMING_INSPECTION",
    /** 首检 */
    FIRST_INSPECTION = "FIRST_INSPECTION",
    /** 巡检 */
    PATROL_INSPECTION = "PATROL_INSPECTION",
    /** 工序检 */
    PROCESS_INSPECTION = "PROCESS_INSPECTION",
    /** 成品检 */
    PRODUCT_INSPECTION = "PRODUCT_INSPECTION",
    /** 出货检 */
    SHIPMENT_INSPECTION = "SHIPMENT_INSPECTION",
    /** 试验 */
    EXPERIMENT = "EXPERIMENT",
    /** 其它 */
    OTHER = "OTHER"
}

export enum ECheckTaskCheckRecordQueryRequestDTO_threeInspectionSystem {
    /** 自检 */
    SELF_INSPECTION = "SELF_INSPECTION",
    /** 互检 */
    MUTUAL_INSPECTION = "MUTUAL_INSPECTION",
    /** 专检 */
    SPECIAL_INSPECTION = "SPECIAL_INSPECTION"
}

export enum ECheckTaskCheckRecordQueryResponseDTO_inspectionResultsOfIndividualParts {
    /** 合格 */
    QUALIFIED = "QUALIFIED",
    /** 不合格 */
    UN_QUALIFIED = "UN_QUALIFIED",
    /** 不适用 */
    UNSUITED = "UNSUITED"
}

export enum ECheckTaskCheckRecordQueryResponseDTO_inspectionResult {
    /** 合格 */
    QUALIFIED = "QUALIFIED",
    /** 不合格 */
    UN_QUALIFIED = "UN_QUALIFIED",
    /** 不适用 */
    UNSUITED = "UNSUITED"
}
