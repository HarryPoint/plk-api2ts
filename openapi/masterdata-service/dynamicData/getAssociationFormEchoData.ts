import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/getAssociationFormEchoDataUsingPOST
*/
export default function fetchMethod(options: { data: IAssociationFormQueryEchoInputVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getAssociationFormEchoData",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** AssociationFormQueryEchoInputVO */
export interface IAssociationFormQueryEchoInputVO {
    /** undefined */
    formDataIdList?: string[];
    /** undefined */
    formFieldId?: string;
}
/** JSONResult«List«JSONObject»» */
export interface IJSONResultListJSONObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IJSONObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** JSONObject */
export interface IJSONObject {
}
