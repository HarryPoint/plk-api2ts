import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/仓位相关/getTreeByWarehouseUsingGET
export default function fetchMethod(params: { storehouseId: string; enterpriseId: number }) {
    return http<IJSONResultListPositionTreeReturnsVO>({
        url: "/masterdata-service/warehouse/getTreeByWarehouse",
        method: "get",
        params,
    });
}
// JSONResult«List«仓位树返回VO»»
export interface IJSONResultListPositionTreeReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPositionTreeReturnsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 仓位树返回VO
export interface IPositionTreeReturnsVO {
    // id
    id: number;
    // 仓位名称
    name: string;
    // 仓位编号
    code: string;
    // 状态(是否可用)
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
    // 区域名称
    areaName: string;
    // 仓库名称
    storehouseName: string;
    // 子仓位
    children: IPositionTreeReturnsVO[];
}
