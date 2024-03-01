import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/维联打印模板相关/bindMaterialUsingPOST
*/
export default function fetchMethod(options: { data: ITheViVBatchPrintTemplateBindsTheMaterialRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/weiLianLotPrintTemplate/bindMaterial",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 维联批次打印模板绑定物料请求对象 */
export interface ITheViVBatchPrintTemplateBindsTheMaterialRequestObject {
    /** 物料ids */
    materialIds: string[];
    /** 打印模板id */
    printTemplateId: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
