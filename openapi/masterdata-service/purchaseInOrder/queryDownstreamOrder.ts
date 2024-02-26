import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/采购入库单相关/queryDownstreamOrderUsingPOST
*/
export default function fetchMethod(options: { data: IIdCollectionInformation }, extraOptions?: any) {
    return http<IJSONResultListAssociatesTheDocumentResponse>(
        {
            url: "/masterdata-service/purchaseInOrder/queryDownstreamOrder",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: number[];
}
/** JSONResult«List«关联单据响应»» */
export interface IJSONResultListAssociatesTheDocumentResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAssociatedDocumentResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 关联单据响应 */
export interface IAssociatedDocumentResponse {
    /** 单据id */
    id?: number;
    /** 单据编号 */
    code?: string;
    /** 关联单据id */
    associatedOrderId?: number;
    /** 关联单据编号 */
    associatedOrderCode?: string;
    /** 关联单据类型 */
    associatedOrderType?: string;
    /** 关联单据类型描述 */
    associatedOrderTypeDesc?: string;
    /** 流程id */
    flowPathId?: number;
}
