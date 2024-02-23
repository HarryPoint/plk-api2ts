import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/库存查询相关/exportUsingPOST_34
export default function fetchMethod(data: IMaterialMasterDataInventorySearchVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/warehouseMaterial/export",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 物料主数据库存搜索VO
export interface IMaterialMasterDataInventorySearchVO {
    // 当前页面
    pageNo: number;
    // 物料名称
    materialName: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 物料id集
    materialIds: number[];
    // 编号
    materialCode: string;
    // 规格
    materialSpec: string;
    // 仓库id
    storehouseIds: number[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
