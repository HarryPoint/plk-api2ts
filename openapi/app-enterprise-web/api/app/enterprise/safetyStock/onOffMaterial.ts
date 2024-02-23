import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/安全库存相关/onOffMaterialUsingPOST
export default function fetchMethod(data: ISafetyStockMaterialSwitchWarning) {
    return post<IJSONResultobject['data']>({
      url: "/app-enterprise-web/api/app/enterprise/safetyStock/onOffMaterial",
      data,
    });
}
// 安全库存物料开关预警
export interface ISafetyStockMaterialSwitchWarning {
    // 设置类型
    type: string;
    // 对应业务id
    businessId: number;
    // 物料id
    materialId: number;
    // 是否开启预警
    isWarning: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
