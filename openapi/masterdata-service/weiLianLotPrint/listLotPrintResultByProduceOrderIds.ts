import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/维联批次打印相关/listLotPrintResultByProduceOrderIdsUsingPOST
export function fetchMethod(data: string) {
    return post({
      url: "/masterdata-service/weiLianLotPrint/listLotPrintResultByProduceOrderIds",
      data,
    });
}
// JSONResult«List«维联批次打印模板响应对象»»
export interface IJSONResultListPrintsTemplateResponseObjectsForTheVTLBatch {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IVivBatchPrintTemplateResponseObject1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 维联批次打印模板响应对象_1
export interface IVivBatchPrintTemplateResponseObject1 {
    // id
    printTemplateId: number;
    // 模板类型
    type: string;
    // 打印模板
    printTemplate: string;
    // 批次号
    lotNo: string;
    // 物料编号
    materialCode: string;
    // 批次数量
    actualTotalCount: number;
    // 条码值
    universalCode: string;
    // 打印次数
    printCount: number;
}
