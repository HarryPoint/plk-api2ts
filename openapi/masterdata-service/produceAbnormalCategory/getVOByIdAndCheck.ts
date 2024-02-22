import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产异常类型相关/getVOByIdAndCheckUsingGET_1
export function fetchMethod(params: { enterpriseId: number; id: number }) {
    return get({
      url: "/masterdata-service/produceAbnormalCategory/getVOByIdAndCheck",
      params,
    });
}
// JSONResult«生产异常类型VO»
export interface IJSONResultIndicatesTheProductionExceptionTypeVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionExceptionTypeVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产异常类型VO
export interface IProductionExceptionTypeVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 异常分类
    type: string;
    // 类型名称
    name: string;
    // 类型编号
    code: string;
}
