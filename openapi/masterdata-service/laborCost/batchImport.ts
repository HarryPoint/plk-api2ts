import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/工费相关/batchImportUsingPOST_2
export default function fetchMethod(data: ILaborCostsSaveDTO[], extraOptions?: any) {
    return http<IJSONResultListstring>(
        {
            url: "/masterdata-service/laborCost/batchImport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 工费保存DTO
export interface ILaborCostsSaveDTO {
    // id
    id: number;
    // 编号
    code: string;
    // 名称
    name: string;
    // 关联工序id
    processIds: number[];
    // 关联物料id
    materialIds: number[];
    // 合格产出工费单价（元）
    producePrice: number;
    // 返工产出工费单价（元）
    backProducePrice: number;
    // 准备工费（元）
    readyPrice: number;
}
// JSONResult«List«string»»
export interface IJSONResultListstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
