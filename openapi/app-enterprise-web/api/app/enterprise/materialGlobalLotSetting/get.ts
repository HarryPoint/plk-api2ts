import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/物料全局批次设置相关/getUsingGET_1
export default function fetchMethod() {
    return http<IJSONResultMaterialGlobalBatchSettingsEditResponseObject>({
        url: "/app-enterprise-web/api/app/enterprise/materialGlobalLotSetting/get",
        method: "get",
    });
}
// JSONResult«物料全局批次设置编辑响应对象»
export interface IJSONResultMaterialGlobalBatchSettingsEditResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialGlobalBatchSettingsEditResponseObjects;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料全局批次设置编辑响应对象
export interface IMaterialGlobalBatchSettingsEditResponseObjects {
    // 启用序列号
    enableSerialNo: string;
    // 启用批次
    enableLot: string;
    // 物料批次出库规则
    lotOutRule: string;
    // 启用质量追溯
    enableQualityTraceability: string;
    // 启用外部码
    enableExternalCode: string;
}
