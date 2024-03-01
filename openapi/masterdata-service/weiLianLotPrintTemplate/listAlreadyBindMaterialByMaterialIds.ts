import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/维联打印模板相关/listAlreadyBindMaterialByMaterialIdsUsingPOST
*/
export default function fetchMethod(options: { data: ITheVTLBatchPrintTemplateHasBeenBoundToAMaterialRequestObject }, extraOptions?: any) {
    return http<IJSONResultListBindAMaterialResponseObjectToTheVirtualizedBatchPrintTemplate>(
        {
            url: "/masterdata-service/weiLianLotPrintTemplate/listAlreadyBindMaterialByMaterialIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 维联批次打印模板已绑定物料请求对象 */
export interface ITheVTLBatchPrintTemplateHasBeenBoundToAMaterialRequestObject {
    /** 物料ids */
    materialIds: string[];
    /** 打印模板id */
    printTemplateId: string;
}
/** JSONResult«List«维联批次打印模板绑定物料响应对象»» */
export interface IJSONResultListBindAMaterialResponseObjectToTheVirtualizedBatchPrintTemplate {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IVTLBatchPrintTemplateBindingMaterialResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 维联批次打印模板绑定物料响应对象 */
export interface IVTLBatchPrintTemplateBindingMaterialResponseObject {
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
}
