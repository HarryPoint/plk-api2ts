import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/工艺路径相关/getByIdAndCheckUsingGET_1
export default function fetchMethod(params: { enterpriseId: number; id: number }) {
    return get<IJSONResultRoutingDeprecatedVO['data']>({
      url: "/masterdata-service/routing/getByIdAndCheck",
      params,
    });
}
// JSONResult«RoutingDeprecatedVO»
export interface IJSONResultRoutingDeprecatedVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IRoutingDeprecatedVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// RoutingDeprecatedVO
export interface IRoutingDeprecatedVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 工艺路径编码
    code: string;
    // 工艺路径名称
    name: string;
    // 所属主物料id
    materialId: number;
    // 所属主物料bomid
    materialBomId: number;
    // 是否默认
    isDefault: string;
}
