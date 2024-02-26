import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/流程数据相关/queryStorageBasicAssociationReferenceDataListUsingPOST
*/
export default function fetchMethod(data: IFormReferencingQueryRequestDTO, extraOptions?: any) {
    return http<IJSONResultListInventoryBasicDataAssociationDataQueryResponse>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathData/queryStorageBasicAssociationReferenceDataList",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** FormReferencingQueryRequestDTO */
export interface IFormReferencingQueryRequestDTO {
    /** undefined */
    flowPathId: number;
    /** undefined */
    formRecordIdList?: number[];
}
/** JSONResult«List«库存基础数据关联数据查询响应»» */
export interface IJSONResultListInventoryBasicDataAssociationDataQueryResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IInventoryBasicDataAssociatedDataQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 库存基础数据关联数据查询响应 */
export interface IInventoryBasicDataAssociatedDataQueryResponse {
    /** 数据id */
    id?: number;
    /** 数据编码 */
    code?: string;
    /** 数据名称 */
    name?: string;
}
