import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/维联打印模板相关/bindMaterialUsingPOST
*/
export default function fetchMethod(data: ITheViVBatchPrintTemplateBindsTheMaterialRequestObject, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/weiLianLotPrintTemplate/bindMaterial",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 维联批次打印模板绑定物料请求对象 */
export interface ITheViVBatchPrintTemplateBindsTheMaterialRequestObject {
    /** 打印模板id */
    printTemplateId: number;
    /** 物料ids */
    materialIds: number[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
