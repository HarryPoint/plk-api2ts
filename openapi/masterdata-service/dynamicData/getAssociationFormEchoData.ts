import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/getAssociationFormEchoDataUsingPOST
*/
export default function fetchMethod(data: IAssociationFormQueryEchoInputVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getAssociationFormEchoData",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** AssociationFormQueryEchoInputVO */
export interface IAssociationFormQueryEchoInputVO {
    /** undefined */
    formFieldId: number;
    /** undefined */
    formDataIdList: number[];
}
/** JSONResult«List«JSONObject»» */
export interface IJSONResultListJSONObject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IJSONObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** JSONObject */
export interface IJSONObject {
}
