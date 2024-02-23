import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/维联打印模板相关/listAlreadyBindMaterialByPrintTemplateIdUsingGET
export default function fetchMethod(params: { id: string }) {
    return get<IJSONResultListBindAMaterialResponseObjectToTheVirtualizedBatchPrintTemplate>({
      url: "/masterdata-service/weiLianLotPrintTemplate/listAlreadyBindMaterialByPrintTemplateId",
      params,
    });
}
// JSONResult«List«维联批次打印模板绑定物料响应对象»»
export interface IJSONResultListBindAMaterialResponseObjectToTheVirtualizedBatchPrintTemplate {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IVTLBatchPrintTemplateBindingMaterialResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 维联批次打印模板绑定物料响应对象
export interface IVTLBatchPrintTemplateBindingMaterialResponseObject {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
}
