import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/公共相关/getStorehouseSelectorUsingPOST
export default function fetchMethod(data: IWarehouseMasterDataSelectionListSearchVO) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>({
        url: "/app-enterprise-web/api/app/enterprise/common/getStorehouseSelector",
        method: "post",
        data,
    });
}
// 仓库主数据选择列表搜索VO
export interface IWarehouseMasterDataSelectionListSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 名称/编号
    nameOrCode: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«List«Id Code Name 通用传输对象»»
export interface IJSONResultListIdCodeNameACommonTransferObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdCodeNameGenericTransportObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id Code Name 通用传输对象
export interface IIdCodeNameGenericTransportObject {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
