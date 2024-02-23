import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/初始化引擎/searchRelationFormDataUsingPOST
export default function fetchMethod(data: ITheFieldRefersToTheQueryCondition) {
    return post<ITheJSONResultFieldReferencesTheSearchResults['data']>({
      url: "/app-enterprise-web/api/app/enterprise/initEngine/fieldReference/search",
      data,
    });
}
// 字段引用查询条件
export interface ITheFieldRefersToTheQueryCondition {
    // 表定义编码
    tableDefineCode: string;
    // 字段定义编码
    fieldDefineCode: string;
    // 搜索值
    searchValue: string;
}
// JSONResult«字段引用搜索结果»
export interface ITheJSONResultFieldReferencesTheSearchResults {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFieldsReferToSearchResults;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 字段引用搜索结果
export interface IFieldsReferToSearchResults {
    // 字段列表
    fieldList: IFormField[];
    // 数据列表
    dataList: IMapstringstring[];
}
// 表单字段
export interface IFormField {
    // undefined
    code: string;
    // undefined
    name: string;
}
// Map«string,string»
export interface IMapstringstring {
}
