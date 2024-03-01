import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/queryAssociationReferenceRecordListUsingPOST
*/
export default function fetchMethod(options: { data: IFormReferencingQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListFormReferencingQueryResponseDTO>(
        {
            url: "/masterdata-service/dynamicData/queryAssociationReferenceDataList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** FormReferencingQueryRequestDTO */
export interface IFormReferencingQueryRequestDTO {
    /** undefined */
    flowPathId: string;
    /** undefined */
    formRecordIdList?: string[];
}
/** JSONResult«List«FormReferencingQueryResponseDTO»» */
export interface IJSONResultListFormReferencingQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFormReferencingQueryResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FormReferencingQueryResponseDTO */
export interface IFormReferencingQueryResponseDTO {
    /** 表单应用的APP编码 */
    associationRefAppCode?: string;
    /** 表单应用的APP的ID */
    associationRefAppId?: string;
    /** 表单应用的APP名称 */
    associationRefAppName?: string;
    /** 关联引用的表单的单据日期 */
    associationRefFormBillData?: number;
    /** 关联引用的表单记录编码 */
    associationRefFormRecordCode?: string;
    /** 关联引用的表单记录ID */
    associationRefFormRecordId?: string;
    /** 单据类型 */
    billType?: EFormReferencingQueryResponseDTO_billType;
    /** 当前表单编码 */
    currentFormRecordCode?: string;
    /** 当前表单ID */
    currentFormRecordId?: string;
}

export enum EFormReferencingQueryResponseDTO_billType {
    /** 动态表单 */
    DYNAMIC_FORM = "DYNAMIC_FORM",
    /** 盘点单 */
    STORAGE_TAKE_CHECK_TASK = "STORAGE_TAKE_CHECK_TASK"
}
