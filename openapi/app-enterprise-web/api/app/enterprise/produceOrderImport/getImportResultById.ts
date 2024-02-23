import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/生产订单导入相关/getImportResultByIdUsingGET_1
export default function fetchMethod(params: { id: number }) {
    return get<IJSONResultProduceOrderImportSynchronizationOutputDTO['data']>({
      url: "/app-enterprise-web/api/app/enterprise/produceOrderImport/getImportResultById",
      params,
    });
}
// JSONResult«ProduceOrderImportSynchronizationOutputDTO»
export interface IJSONResultProduceOrderImportSynchronizationOutputDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProduceOrderImportSynchronizationOutputDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProduceOrderImportSynchronizationOutputDTO
export interface IProduceOrderImportSynchronizationOutputDTO {
    // undefined
    id: number;
    // undefined
    importStatus: string;
    // undefined
    failureMessage: string;
    // undefined
    totalCount: number;
    // undefined
    importedCount: number;
    // undefined
    existsSystemQuantity: number;
    // undefined
    importSuccessQuantity: number;
    // undefined
    importFailureQuantity: number;
    // undefined
    failureProduceOrderList: IProduceOrderImportFailureOutputDTO[];
    // undefined
    repeatProduceOrderList: Record<string, any>[];
    // undefined
    savedProduceOrderIdList: number[];
}
// ProduceOrderImportFailureOutputDTO
export interface IProduceOrderImportFailureOutputDTO {
    // undefined
    produceOrderCode: string;
    // undefined
    failureMessage: string;
}
