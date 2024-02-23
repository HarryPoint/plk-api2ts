import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/安全库存相关/onOffMaterialUsingPOST
export default function fetchMethod(data: ISafetyStockMaterialSwitchWarning, params: { enterpriseId: number; userId: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/safetyStock/onOffMaterial",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
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
