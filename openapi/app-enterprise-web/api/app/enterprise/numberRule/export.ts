import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/编码规则相关/exportUsingPOST_26
export default function fetchMethod(data: ICodeRulePagingQueryVO) {
    return post<IJSONResultlong['data']>({
      url: "/app-enterprise-web/api/app/enterprise/numberRule/export",
      data,
    });
}
// 编码规则分页查询VO
export interface ICodeRulePagingQueryVO {
    // 流程id
    flowPathId: number;
    // 当前页面
    pageNo: number;
    // 字段名称
    fieldName: string;
    // 分页大小
    pageSize: number;
    // 流程表单序列值集合
    flowPathFormFiledSerialNoList: string[];
    // 排序字段集
    orders: IPagingSortVO[];
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
