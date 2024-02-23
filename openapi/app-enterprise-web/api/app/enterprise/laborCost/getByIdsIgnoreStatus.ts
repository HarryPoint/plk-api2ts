import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/工费相关/getByIdsIgnoreStatusUsingPOST_2
export default function fetchMethod(data: IIdCollectionInformation) {
    return http<IJSONResultListWorkCostDropDownSelectAListToSearchForResponseDtos>({
        url: "/app-enterprise-web/api/app/enterprise/laborCost/getByIdsIgnoreStatus",
        method: "post",
        data,
    });
}
// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
}
// JSONResult«List«工费下拉选择列表搜索响应DTO»»
export interface IJSONResultListWorkCostDropDownSelectAListToSearchForResponseDtos {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPayDropDownSelectListToSearchResponseDtos[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工费下拉选择列表搜索响应DTO
export interface IPayDropDownSelectListToSearchResponseDtos {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}