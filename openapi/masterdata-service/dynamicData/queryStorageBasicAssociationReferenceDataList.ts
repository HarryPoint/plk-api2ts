import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/动态数据相关/queryStorageBasicAssociationReferenceDataListUsingPOST
export default function fetchMethod(data: IFormReferencingQueryRequestDTO) {
    return http<IJSONResultListInventoryBasicDataAssociationDataQueryResponse>({
        url: "/masterdata-service/dynamicData/queryStorageBasicAssociationReferenceDataList",
        method: "post",
        data,
    });
}
// FormReferencingQueryRequestDTO
export interface IFormReferencingQueryRequestDTO {
    // undefined
    flowPathId: number;
    // undefined
    formRecordIdList: number[];
}
// JSONResult«List«库存基础数据关联数据查询响应»»
export interface IJSONResultListInventoryBasicDataAssociationDataQueryResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IInventoryBasicDataAssociatedDataQueryResponse[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 库存基础数据关联数据查询响应
export interface IInventoryBasicDataAssociatedDataQueryResponse {
    // 数据id
    id: number;
    // 数据编码
    code: string;
    // 数据名称
    name: string;
}
